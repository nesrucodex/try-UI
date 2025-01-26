import React, { FC } from "react";

type Props = {
  title: string;
};

const SectionTitle: FC<Props> = ({ title }) => {
  return <h2>{title}</h2>;
};

export default SectionTitle;
