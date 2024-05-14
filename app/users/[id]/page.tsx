import React from "react";

interface DetailsProps {
  params: { id: number };
}

const UserDetailsPage = ({ params: { id } }: DetailsProps) => {
  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
