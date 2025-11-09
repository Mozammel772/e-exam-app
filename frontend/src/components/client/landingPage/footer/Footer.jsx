
import { Image } from "@heroui/image";
import { Link } from "react-router";
import FacebookIcon from "../../../../assets/FacebookIcon";
import InstagramIcon from "../../../../assets/InstagramIcon";
import LinkedinIcon from "../../../../assets/LinkedinIcon";
import TwitterIcon from "../../../../assets/TwitterIcon";
import YoutubeIcon from "../../../../assets/YoutubeIcon";
import "../../../../styles/footer.css";
export default function Footer() {
  return (
    <div
      className="conatiner "
      style={{
        marginTop: "30px",
        // marginBottom: "30px",
        backgroundColor: "#024645",
        color: "white",
        padding: "30px",
      }}
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 max-w-[1600px] mx-auto">
        <div className="w-full ">
          <div className="flex flex-row justify-start items-start">
            <Link to="/">
              {" "}
              <Image
                width={100}
                src="https://i.ibb.co.com/mVgY9jFz/main-logo.png"
                className="footer-logo"
              />
            </Link>

            <p className="text-white italic text-3xl font-bold solaimanlipi">
              E-Exam App
            </p>
          </div>
          <p className=" text-2xl solaimanlipi font-light">
            📢 প্রশ্ন তৈরি করার স্মার্ট সমাধান!📢
          </p>
          <p className="text-2xl solaimanlipi font-light">
            💡স্মার্ট শিক্ষক ও অভিভাবকদের জন্য স্মার্ট সমাধান💡
          </p>
          <div
            className="flex flex-row justify-start items-center"
            style={{ marginTop: "20px" }}
          >
            <Link to="https://www.facebook.com/eexamapp" target="_blank">
              <FacebookIcon />
            </Link>

            <TwitterIcon />
            <InstagramIcon />
            <Link to="https://www.youtube.com/@eexamapp" target="_blank">
              <YoutubeIcon />
            </Link>

            <LinkedinIcon />
          </div>
        </div>
        <div className="flex  items-start flex-col w-full">
          <p
            style={{ marginBottom: "10px" }}
            className="text-center text-2xl font-semibold solaimanlipi"
          >
            কোম্পানি
          </p>
          <Link to="/terms_conditions">
            <p className="text-center text-xl solaimanlipi cursor-pointer hover:underline">
              টার্মস এন্ড কন্ডিশন
            </p>
          </Link>

          <Link to="/privacy_policies">
            <p className="text-center text-xl solaimanlipi cursor-pointer hover:underline">
              প্রাইভেসি পলিসি
            </p>
          </Link>

          <Link to="/refund_policies">
            <p className="text-center text-xl solaimanlipi cursor-pointer hover:underline">
              রিফান্ড পলিসি
            </p>
          </Link>

          <Link to="/cancelletion_policies">
            <p className="text-center text-xl solaimanlipi cursor-pointer hover:underline">
              ক্যান্সলেশন পলিসি
            </p>
          </Link>

          <p className="text-center text-xl solaimanlipi">
            ট্রেড লাইসেন্সঃ ২৯/২৫
          </p>
        </div>
        <div className="flex  items-start flex-col w-full">
          <p
            style={{ marginBottom: "10px" }}
            className="text-center text-2xl font-semibold solaimanlipi"
          >
            আমাদের যোগাযোগের মাধ্যম
          </p>
          <p className="text-center text-xl solaimanlipi">
            মোবাইলঃ ০১৩৪০-৩৪৫৭৮৭
          </p>
          <p className="text-center text-xl solaimanlipi">
            ইমেইলঃ hello@eexamapp.com
          </p>
          <p className="text-center text-xl solaimanlipi">
            ঠিকানাঃ উলিপুর,পল্লীমঙ্গল হাট,বগুড়া সদর, বগুড়া
          </p>
        </div>
      </div>
    </div>
  );
}
