import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

const getRandomNumber = async () => {
  const random = Math.random();
  return random;
};

const revalidate = async () => {
  revalidatePath("/Next/Caching");
};

export default async function Caching() {
  const random = Math.random();
  const randomNumber = await getRandomNumber();
  revalidate();
  return (
    <div>
      Random Number: {randomNumber}
      <br />
      Random: {random}
    </div>
  );
}
