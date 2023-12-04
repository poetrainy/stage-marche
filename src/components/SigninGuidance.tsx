import { FC, useEffect, useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

import OriginalSpacer from "src/components/OriginalSpacer";
import PreText from "src/components/PreText";
import { SignInGuidancePageType } from "src/types/signIn";

type Props = {
  guidance: { heading: string; text: string };
};

const SignInGuidance: FC<Props> = ({ guidance }) => {
  // const [firebaseUsers, setFirebaseUsers] = useState<string[]>();

  const text = "Googleでログイン";

  // const getFirebase = async () => {
  //   const db = getFirestore(firebaseApp);
  //   const col = collection(db, "user");
  //   const querySnapshot = await getDocs(col);
  //   const retId: string[] = [];
  //   querySnapshot.forEach((doc) => {
  //     retId.push(doc.id);
  //   });
  //   setFirebaseUsers(retId);
  // };

  // useEffect(() => {
  //   getFirebase();
  // }, []);

  // const signUp = async () => {
  //   try {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     await auth.signInWithPopup(provider).catch(alert);
  //     auth.onAuthStateChanged(async (user) => {
  //       if (!!user) {
  //         // @ts-ignore
  //         const email = user?.providerData[0]?.email;
  //         const users = firebaseUsers?.filter((element) => element === email);
  //         if (
  //           users !== undefined &&
  //           users.length === 0 &&
  //           typeof email === "string"
  //         ) {
  //           const db = firebase.firestore();
  //           const userRef = db.collection("user").doc(email);
  //           await userRef.set({
  //             data: user?.providerData[0],
  //           });
  //           router.push("/enquete");
  //         } else {
  //           router.push("/");
  //         }
  //       }
  //     });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <Center
      flexDir="column"
      h="calc(100vh - 64px - 32px - 40px - 96px)"
      m="auto"
    >
      <Box as="img" src={`/img/guidance_${guidance.path}.svg`} />
      <OriginalSpacer size="32px" />
      <Center flexDir="column" gap="12px" w="fit-content">
        <PreText text={guidance.heading} />
        <Text
          color="black600"
          fontSize="1.2rem"
          lineHeight="2.2rem"
          textAlign="center"
        >
          {guidance.text}
        </Text>
      </Center>
      <OriginalSpacer size="32px" />
      <Center
        w="240px"
        h="64px"
        color="white"
        bg="greenToBlue"
        fontSize="1.6rem"
        fontWeight="bold"
        rounded="full"
        m="0 auto"
        // onClick={() => signUp()}
        _hover={{
          cursor: "pointer",
        }}
      >
        {text}
      </Center>
    </Center>
  );
};

export default SignInGuidance;
