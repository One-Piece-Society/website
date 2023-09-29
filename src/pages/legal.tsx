/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import LayoutOther from "~/components/layouts/LayoutOther";

const Legal = () => {
  return (
    <LayoutOther>
      <section className="flex h-fit w-full flex-col items-center px-4 pb-16 pt-4 md:min-h-screen md:px-16 md:pt-16">
        <div className="w-full max-w-4xl space-y-4 pb-16 font-body text-xl">
          <h1 className="pb-4 pt-24 font-heading text-3xl leading-normal drop-shadow-lg md:text-6xl">
            Legal Disclaimer
          </h1>
          <p className="leading-relaxed">
            One Piece Society, a student-run affiliated club at UNSW,
            acknowledges and respects the original creators of the 'One Piece'
            anime/manga series. We want to make it clear that we are a separate
            fan entity and are in no way officially affiliated with the
            creators, publishers, or any official representatives of 'One
            Piece.' All artwork and content related to 'One Piece' featured on
            our website, social media platforms, and during our events belong to
            their respective creators, and we claim no ownership or association
            with them.
          </p>
          <p className="leading-relaxed">
            Our club is dedicated to celebrating and appreciating the world,
            characters, and story of 'One Piece.' We are fans who have come
            together to share our love for the series and foster a community of
            like-minded enthusiasts. While we engage in various activities, such
            as read-alongs, watch-alongs, discussions, and art sessions inspired
            by 'One Piece,' it is essential to recognise that our intention is
            to promote and enjoy the series created by Eiichiro Oda and its
            official materials.
          </p>
          <p className="leading-relaxed">
            We encourage all members to respect the intellectual property rights
            of 'One Piece' and its creators. Our focus is on cultivating a
            passionate and respectful community that comes together to enjoy the
            rich and exciting world of 'One Piece' while understanding our
            distinct role as fans and enthusiasts, separate from the official
            'One Piece' franchise.
          </p>
          <p>
            If you wish to have any artwork or image removed from the website,
            or have any complaints regarding our content, email us at{" "}
            <span className="inline-block underline">
              onepieceunsw@gmail.com
            </span>{" "}
            about the details.
          </p>
        </div>
        <Link
          href="/"
          className="rounded-xl bg-white p-4 font-body font-bold text-primary-red transition-all duration-300 hover:scale-105 hover:drop-shadow-xl"
        >
          Back Home
        </Link>
      </section>
    </LayoutOther>
  );
};

export default Legal;
