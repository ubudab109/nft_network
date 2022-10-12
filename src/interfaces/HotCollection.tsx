export interface IHotCollectionCardProps {
  name: string;
  info: string;
  background: string;
  profileImage: string;
}

export interface IHotCollectionListProps {
  slideData: IHotCollectionCardProps[];
  sectionName: string;
}
