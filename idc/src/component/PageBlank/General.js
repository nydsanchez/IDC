const General = ({ children }) => {
  return (
    <main>
      <div>
        <p style={{ textWrap: "wrap", overflow: "hidden" }}>{children}</p>
      </div>
    </main>
  );
};
export default General;
