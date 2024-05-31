const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="grid justify-center my-4 text-center">
      <p className="text-yellow-500 py-2">---{subTitle}---</p>
      <p className="text-4xl uppercase font-bold border-t border-b w-fit py-3">{title}</p>
    </div>
  );
};

export default SectionTitle;
