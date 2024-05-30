import { Metadata } from 'next';
import Footer from '@/app/ui/footer/Footer';
import Bar from '@/app/ui/bar/Bar';
import PaymentLogos from '@/app/ui/paymentLogos/PaymentLogos';
import Stats from '@/app/ui/stats/Stats';
import { ApiResponse } from '@/app/lib/definitions/definitions';
import Navigation from '@/app/ui/navigation/Navigation';
import Gallery from '@/app/ui/gallery/Gallery';

export async function generateMetadata({ params }: { params: { profile: string } }): Promise<Metadata> {
    return { title: `OnlyPaks ${params.profile}` };
};

async function fetchPosts(postId: string): Promise<ApiResponse> {
    const res = await fetch(`${process.env.API_BASE_URL}/api/posts/${postId}`,
        {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${process.env.DATA_API_KEY}`
            },
        });

    if (!res.ok) throw new Error('Failed to fetch data');

    return res.json();
};

export default async function Home({ params }: { params: { profile: string, type: string } }) {

    const response = await fetchPosts(params.profile)

    return (

        <>


            {response.data.media ?

                <div className="flex lg:gap-x-6  ">

                    {/* <div className="flex-1 lg:min-w-[450px] ">

                        <h2 className="text-resd-300">{params.type}</h2>

                        <Stats stats={response.data.stats} />

                        <Navigation media={response.data.media}></Navigation>

                        <Gallery media={response.data.media} ></Gallery>

                        <PaymentLogos></PaymentLogos>

                        <Bar pricing={response.data.pricing} className="lg:hidden" />

                        <Footer />

                    </div>

                    <Bar pricing={response.data.pricing} className="hidden lg:block flex-1 lg:max-w-[400px]" />
 */}
                </div>

                :

                <main className="h-full grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <p className="text-base font-semibold text-indigo-600">404</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
                            <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                </main>

            }


        </>
    )
}