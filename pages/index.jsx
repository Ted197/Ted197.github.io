import { useEvmNativeBalance } from '@moralisweb3/next';

function HomePage() {
    const address = '0x222B068F1C389413C34F046a83F9e59D93085548';
    const { data: nativeBalance } = useEvmNativeBalance({ address });
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
            <h3>v0.0.1</h3>
        </div>
    );
}

export default HomePage;