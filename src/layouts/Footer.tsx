import { api } from "~/util/api";

const Footer = () => {

    const res = api.example.hello.useQuery({text: "Alex"});
    const res2 = api.example.getEvent.useQuery();
    
    return (
    <div className="bg-primary-red text-3xl text-white font-body">
        <p>
            {res.data?.greeting}
        </p>
        <p>
            {res2.data?.created.toString()}
        </p>
    </div>
    )
}
export default Footer;