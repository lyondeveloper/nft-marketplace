import React from 'react';
import NftItem from '../item';

interface NftAttributes {
  trait_type: string;
  value: string;
}

interface NftData {
  description: string;
  image: string;
  name: string;
  attributes: Array<NftAttributes>
}

interface Props {
  nfts: Array<NftData>
};

const NftList: React.FC<Props> = ({ nfts }) => {

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map((nft) => (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <NftItem description={nft.description} image={nft.image} name={nft.name} attributes={nft.attributes} />
        </div>
      ))}
    </div>
  );
}

export default NftList
