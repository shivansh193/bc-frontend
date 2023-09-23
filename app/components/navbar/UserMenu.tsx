"use client";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";



const UserMenu = () => {
    const router = useRouter()

    return (
        <div className="relative">
            <div className="flex flex-row items-center-gap-3">

                <div className="flex flex-row cursor-pointer">

                    <MenuItem
                        onClick={() => {router.push('/adduser')}}
                        label="Add user"
                    />
                       <MenuItem
                        onClick={() => {router.push('./getdoc')}}
                        label="Get document"
                    />
                       <MenuItem
                        onClick={() => {router.push('./verifydoc')}}
                        label="Verify document"
                    />
                  
                  
                </div>
            </div>
        </div>
    );
};
export default UserMenu;