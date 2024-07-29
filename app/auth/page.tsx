"use client"
import { Button } from "@/components/ui/button";
import {createClient} from "@/utils/supabase/client"
import { Github } from "lucide-react";

async function signInWithGithub() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options:{
        redirectTo:"http://localhost:3000/auth/callback"
      }
    })
    if(error){
        console.log(error);
    }
  }

export default function Page(){
    return(
        <div className="flex h-screen">
          <div className="w-3/4"></div>
          <div className="w-1/4 bg-muted flex flex-col justify-center items-center">
            <div className="mb-6 text-2xl">Sign in to get started!</div>
            <Button onClick={signInWithGithub}>
                <Github className="m-0.5"/>
              <>Log in with GitHub</>
              </Button>
          </div>
        </div>
    )
}