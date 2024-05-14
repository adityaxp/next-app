import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return <UserTable sortParam={sortOrder} />;
};

export default UsersPage;
