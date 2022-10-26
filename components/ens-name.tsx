import Link from "next/link";
import {Address, useEnsName, etherscanBlockExplorers} from "wagmi";

export const EnsName = (props: { address: string }) => {
  const {data: ensName} = useEnsName({
    address: props.address as Address,
  })

  let addressOrEnsName = ensName ?? `${props.address.substring(0, 6)}...${props.address.substring(38, 42)}` as const;

  return (
    <Link
      target="_blank"
      href={`${etherscanBlockExplorers.mainnet.url}/address/${props.address}`}
    >
      {addressOrEnsName}
    </Link>
  )
};
