import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "jotai";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Provider as SelfIDProvider } from "@self.id/framework";
import type { ModelTypesToAliases } from "@glazed/types";
import { aliases as workCredentialAliases } from "@/__generated__/aliases";
import { BaseLayout } from '@/components/layout/BaseLayout';
import { CERAMIC_NETWORK, CERAMIC_URL } from "@/constants/common";
import { ModelTypes } from '@/interfaces/workcredential';
import { createClient, Provider as UrqlProvider } from 'urql';
import { DIDContextProvider } from '@/context/DIDContext';

const client = createClient({
  url: "https://api.studio.thegraph.com/query/21459/contx/v0.0.1",
});

const aliases: ModelTypesToAliases<ModelTypes> = workCredentialAliases;

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  const { state, ...props } = pageProps;
  return (
    <>
      <Provider>
        <UrqlProvider value={client}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <SelfIDProvider
                client={{
                  ceramic: CERAMIC_URL,
                  connectNetwork: CERAMIC_NETWORK,
                  aliases,
                  session: true
                }}
                state={state}
                session={true}
              >
                <DIDContextProvider >
                  <BaseLayout>
                    <Component {...pageProps} />
                  </BaseLayout>
              </DIDContextProvider>
            </SelfIDProvider>
          </Web3ReactProvider>
          </UrqlProvider>
      </Provider>
    </>
  )
}

export default MyApp
