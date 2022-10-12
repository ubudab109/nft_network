import type { NextPage } from "next";
import { Main } from "@components/layout";
import {
  HotCollectionDATA,
  DataTopSellerList,
  CardCreateSellData,
  DataCardItem,
} from "@constanta";
import {
  Header,
  HotCollectionList,
  TopSellerList,
  CardCreateSellList,
  ListCardItem,
} from "@components/landingPages";
import Partnership from "@components/Partnership";

const Home: NextPage = () => {
  return (
    <Main imgHeader="/bg-header.jpg">
      <Header />
      <ListCardItem dataCardItem={DataCardItem} />
      <HotCollectionList
        sectionName="Hot Collection"
        slideData={HotCollectionDATA}
      />
      <TopSellerList dataList={DataTopSellerList} />
      <CardCreateSellList
        section={"Create and Sell"}
        data={CardCreateSellData}
      />
      <Partnership />
    </Main>
  );
};

export default Home;
