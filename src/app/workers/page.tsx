import React from "react";

const page = () => {
  return (
    <div className="   p-6  bg-back-main text-text-main flex flex-col items-center justify-center ">
      <h1 className="text-3xl md:text-6xl font-bold mb-8 font-hindeng">
        About Us
      </h1>
      <div>
        <section className="md:flex items-center justify-center my-10  font-antipasto ">
          <div className="w-full  md:w-[50%] p-4 flex flex-col justify-center items-center">
            <img
              src="images/Ceo.png"
              alt="CEO"
              className="w-full  lg:w-[75%] h-[50%] rounded-full "
            />
          </div>
          <div className="w-full  p-4 flex flex-col justify-center items-start">
            <h2 className="  text-2xl font-semibold mb-4 text-main text-left font-hindeng">
              Our CEO
            </h2>
            <p className="text-lg ">
              <span className="font-bold ">Name:</span> Rajesh Mehta
              <br />
              <span className="font-bold ">Background:</span> Rajesh Mehta, our
              visionary CEO, has over 20 years of experience in the hospitality
              industry. He founded our restaurant with the aim of bringing
              authentic Indian flavors to a wider audience. Before embarking on
              his journey in the culinary world, Rajesh dedicated several years
              to working with various NGOs, focusing on community development
              and food security. His extensive background in social work has
              greatly influenced his approach to business, emphasizing
              sustainability and community involvement. Under his leadership,
              our restaurant has grown from a small family-owned business to a
              renowned establishment, known not only for its delicious cuisine
              but also for its commitment to making a positive impact in the
              community.
            </p>
          </div>
        </section>

        <section className="md:flex items-center justify-center font-antipasto">
          <div className=" w-full  md:w-[50%]  p-4 flex flex-col justify-center items-center">
            <img
              src="images/Maincook.png"
              alt="CEO"
              className="w-full  lg:w-[75%] h-[50%] rounded-full bg-center "
            />
          </div>
          <div className="w-full  p-4 flex flex-col justify-center items-start">
            <h2 className="text-2xl  font-semibold mb-4  text-main font-hindeng">
              Our Main Chef
            </h2>
            <p className="text-lg ">
              <span className="font-bold ">Name:</span> Rajiv Kumar
              <br />
              <span className="font-bold ">Background:</span> Rajiv Kumar, our
              head chef, hails from a long line of culinary experts. With a deep
              passion for Indian cuisine, he brings a unique blend of
              traditional and modern techniques to our kitchen. Rajiv's culinary
              journey began in his family's kitchen, where he learned the
              secrets of authentic Indian cooking from his grandparents. He
              further honed his skills at prestigious culinary institutes and
              worked in several renowned restaurants across India and abroad,
              gaining invaluable experience and refining his craft.Rajiv's
              innovative dishes and dedication to quality have made our menu a
              favorite among patrons. His commitment to using fresh,
              locally-sourced ingredients ensures that every dish not only
              delights the palate but also supports local farmers and producers.
              Rajiv is also passionate about mentoring young chefs, often
              hosting workshops and cooking classes to share his knowledge and
              inspire the next generation of culinary talent.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
