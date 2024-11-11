import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1>Saikumar</h1>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
        className="px-10 pt-[100px]"
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default Home;
