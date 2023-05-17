const Story = () => {
    return (
      <>
        <section className="story__pictures">
          <img
            src="./img/story-1.jpeg"
            alt="story picture"
            className="story__pictures--1"
          />
          <img
            src="./img/story-2.jpeg"
            alt="story picture"
            className="story__pictures--2"
          />
        </section>
        <section className="story__text">
          <h3 className="heading-3">happy customer</h3>
          <h2 className="heading-2">the best decision of our life</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur 
            harum volupta!
          </p>
          <button className="btn story__btn">find your own home</button>
        </section>
      </>
    );
}
export default Story;
