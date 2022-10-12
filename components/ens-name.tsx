import {useEnsName} from "wagmi";

export const EnsName = (props: { address: string }) => {
  const {data: ensName} = useEnsName({
    address: props.address,
  })

  const addressShortened: string = `${props.address.substring(0, 6)}...${props.address.substring(38, 42)}`
  let addressOrEnsName = addressShortened
  if (ensName != undefined) {
    addressOrEnsName = ensName
  }

  return <>{addressOrEnsName}</>
};
