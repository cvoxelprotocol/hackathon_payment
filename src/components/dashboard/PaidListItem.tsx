import { useENS } from "@/hooks/useENS";
import { Payment } from "@/interfaces";
import { getExploreLink, shortenStr } from "@/utils/tools";
import Image from "next/image";
import { FC, useMemo } from "react";
import { Table } from "react-daisyui";
import { CommonSpinner } from "../common/CommonSpinner";

type PaidListItemProps = {
    item: Payment
}
export const PaidListItem: FC<PaidListItemProps> = ({item}) => {

    const { ens, ensLoading } = useENS(item.payee);

    const exploreLink = useMemo(() => {
        return getExploreLink(item.txHash, 4)
      }, [item.txHash])


    return (
        <Table.Row key="1">
            <span></span>
            <span>
                {ensLoading ? (
                    <CommonSpinner size="sm" />
                ) : (
                    <span>{ens}</span>
                )}    
            </span>
                <a
                    className="pr-1"
                    href={exploreLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="pr-1">{shortenStr(item.txHash)}</span>
                    <Image src={"/link.svg"} width={14} height={14} objectFit="contain" alt="link" />
                </a>
            <span>{shortenStr(item.id)}</span>
        </Table.Row>
    )
}