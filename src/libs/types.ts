// add type for UserCard's Props
// add type for UserCardDetail's Props
interface UserCardProps{
    name: string;
    email: string;
    imgUrl: string;
    address: string;
}
export type{UserCardProps};

interface UserCardDetailProps {
    address: string;
    email: string;
  }  
  export type { UserCardDetailProps};
