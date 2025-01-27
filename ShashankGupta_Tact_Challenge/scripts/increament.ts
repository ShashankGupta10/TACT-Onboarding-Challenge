import { toNano } from 'ton-core';
import { CounterContract } from '../wrappers/CounterContract';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const counterContract = provider.open(await CounterContract.fromInit());

    await counterContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        "increament"
    );

    await provider.waitForDeploy(counterContract.address);

    // run methods on `counterContract`
}
