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
                        label="Opt 1"
                    />
                       <MenuItem
                        onClick={() => {}}
                        label="Opt 2"
                    />
                       <MenuItem
                        onClick={() => {}}
                        label="Opt 3"
                    />
                       <MenuItem
                        onClick={() => {}}
                        label="Opt 4"
                    />
                </div>
            </div>
        </div>
    );
};
export default UserMenu;