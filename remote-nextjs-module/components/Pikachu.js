import Image from "next/image";

const Pikachu = () => {
  return (
    <div>
      <p>This is the React Component hosted at Remote Module</p>
      <Image
        src="/images/pikachu.png"
        width={200}
        height={200}
        alt="pikachu pokemon"
      />
    </div>
  );
};

export default Pikachu;
