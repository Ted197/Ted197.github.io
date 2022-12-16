import { getSession } from 'next-auth/react';
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';

function Protected({ message, nftList }) {
    return (
        <div>
            <h3>Protected content</h3>
            <p>{message}</p>
            <pre>{JSON.stringify(nftList, null, 2)}</pre>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }
  
if(!Moralis.Core.isStarted){
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
}

    const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
        chain: EvmChain.POLYGON,
        address: session.user.address,
        // replace "0x..." with your NFT token address
        tokenAddresses: ["0x0B91B07bEb67333225A5bA0259D55AeE10E3A578", "0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9"],
    });

    return {
        props: {
            message:
                // if user has at least one NFT he will get protected content
                nftList.raw.total > 0 ? 'Nice! You have our NFT' : "Sorry, you don't have our NFT",
            nftList: nftList.raw.result,
        },
    };
}
export default Protected;