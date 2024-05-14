import axios from "axios";
import type { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const faqsRes = await axios.get("http://localhost:1337/api/faqs");

  return {
    props: {
      faqs: faqsRes.data,
    },
  };
};

const Home = ({ faqs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(faqs.data.attributes);
  return (
    <>
      {faqs.data.map((faq: any) => {
        return (
          <details key={faq.attributes.heading}>
            <summary>{faq.attributes.heading}</summary>
            {faq.attributes.details}
          </details>
        );
      })}
    </>
  );
};

export default Home;
