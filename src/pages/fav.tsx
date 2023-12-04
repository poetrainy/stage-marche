import type { NextPage } from "next";

import Layout from "src/components/Layout";
import StageBunnerSmall from "src/components/Stage/BunnerSmall";
import SubContents from "src/components/SubContents";

import { MOCK_STAGES_BASE } from "src/constants/stage";
import StageBunnerLargeWrapper from "src/components/Stage/BunnerLargeWrapper";

const Fav: NextPage = () => {
  // const email = useGetEmail();
  // const [fav, setFav] = useState<StageType[] | undefined>();
  // const [number, setNumber] = useState<number[] | undefined>();

  // const getFirebase = async () => {
  //   const db = getFirestore(firebaseApp);
  //   const col = collection(db, "user");
  //   const querySnapshot = await getDocs(col);
  //   const ret: any = [];
  //   const retId: string[] = [];
  //   querySnapshot.forEach((doc) => {
  //     ret.push(doc.data());
  //     retId.push(doc.id);
  //   });
  //   const userId: number = ret.findIndex(
  //     (item: AuthType) => item.data.email === email
  //   );
  //   const keepFav: favType[] = ret[userId].fav;
  //   const favList: StageType[] | undefined = [];
  //   const numberList: number[] | undefined = [];
  //   keepFav.forEach((element: favType, i: number) => {
  //     favList.push(MOCK_STAGES_BASE[element.data]);
  //     numberList.push(element.place);
  //   });
  //   setFav(favList);
  //   setNumber(numberList);
  // };

  // useEffect(() => {
  //   getFirebase();
  // }, [email]);

  const ComponentArray = [
    {
      text: "公演予定の作品",
      component: <StageBunnerLargeWrapper stages={MOCK_STAGES_BASE} />,
    },
    {
      text: "公演が終了した作品",
      component: <StageBunnerSmall data={MOCK_STAGES_BASE} />,
    },
  ];

  return <Layout component={<SubContents data={ComponentArray} />} />;
};

export default Fav;
