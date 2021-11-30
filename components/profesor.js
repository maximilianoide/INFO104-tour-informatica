const Profesor = ({ imagen }) => {
  if (!imagen) {
    return <></>;
  } else {
    return (
      <>
        <div className="popImages">
          {imagen.map((img) => (
            <div
              className="profesor"
              style={{ backgroundImage: "url('" + img + "')" }}
            ></div>
          ))}
        </div>
      </>
    );
  }
};
export default Profesor;
