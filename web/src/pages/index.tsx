import { getSession } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export default function Session() {
  return null;
}


export const getServerSideProps: GetServerSideProps = async({req,res}) => {
  const session = getSession(req, res);

  let urlDest = "/app";
  if(!session){
    urlDest = "/api/auth/login";
  } 
  
  return {
    redirect:{
      destination:  urlDest,
      permanent: false
    }
  }

}