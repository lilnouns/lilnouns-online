import {Address, useEnsAvatar} from "wagmi";
import Blockies from "react-blockies";

export const EnsAvatar = (props: { address: string }) => {
  const {data: ensAvatar} = useEnsAvatar({
    address: props.address as Address,
  })

  // eslint-disable-next-line @next/next/no-img-element
  let placeholderOrEnsAvatar = <img className="h-6 w-6 rounded-full border" src={`${ensAvatar}`} alt=""/>;
  if (!ensAvatar) {
    placeholderOrEnsAvatar = <Blockies
      seed={props.address?.toLowerCase() || ''}
      size={10}
      scale={2}
      className={'h-6 w-6 rounded-full'}
    />;
  }

  return placeholderOrEnsAvatar
};
