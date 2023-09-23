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
                        onClick={() => {}}
                        label="Add user"
                    />
                       <MenuItem
                        onClick={() => {}}
                        label="Get document"
                    />
                       <MenuItem
                        onClick={() => {}}
                        label="Verify document"
                    />
                       <MenuItem
                        onClick={() => {}}
                        label="About us page"
                    />
                </div>
            </div>
        </div>
    );
};
export default UserMenu;