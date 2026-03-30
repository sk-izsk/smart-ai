import { useAuth } from "@clerk/react";
import { Suspense, useEffect } from "react";
import { AppRouter } from "./AppRouter";
import { Loader } from "./components/Loader";

export const App = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      console.log("User token:", token);
    });
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen bg-base-100">
        <main>
          <AppRouter />
        </main>
      </div>
    </Suspense>
  );
};
