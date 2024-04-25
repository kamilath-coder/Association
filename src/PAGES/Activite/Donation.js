import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
 
export function Donation() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={handleOpen} variant="text" className="bg-[#066AB2] hover:bg-[#DCA61D] rounded-none text-white sm:w-[800px] h-14 text-base flex flex-row items-end  justify-center space-x-6">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3334 17.5C27.3584 17.5 30.6251 14.2333 30.6251 10.2083C30.6251 6.18329 27.3584 2.91663 23.3334 2.91663C19.3084 2.91663 16.0417 6.18329 16.0417 10.2083C16.0417 14.2333 19.3084 17.5 23.3334 17.5ZM31.2813 25.6666C30.7126 25.0833 29.998 24.7916 29.1667 24.7916H18.9584L15.9251 23.727L16.4063 22.3562L18.9584 23.3333H23.0417C23.5521 23.3333 23.9605 23.1291 24.2959 22.7937C24.6313 22.4583 24.7917 22.05 24.7917 21.5979C24.7917 20.8104 24.4126 20.2708 23.6542 19.9645L13.0521 16.0416H10.2084V29.1666L20.4167 32.0833L32.1271 27.7083C32.1417 26.9354 31.8501 26.25 31.2813 25.6666ZM7.29172 16.0416H1.43506V32.0833H7.29172V16.0416Z" fill="white"/>
        </svg>
        <p>Envoyer un don</p>
      </Button>


    <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div>
            <Typography variant="h5" color="blue-gray">
              Connect a Wallet
            </Typography>
            <Typography color="gray" variant="paragraph">
              Choose which card you want to connect
            </Typography>
          </div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll !px-5">
          <div className="mb-6">
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="py-3 font-semibold uppercase opacity-70"
            >
              Popular
            </Typography>
            <ul className="mt-3 -ml-2 flex flex-col gap-1">
              <MenuItem className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://docs.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  Connect with MetaMask
                </Typography>
              </MenuItem>
              <MenuItem className="mb-1 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://docs.material-tailwind.com/icons/coinbase.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography
                  className="uppercase"
                  color="blue-gray"
                  variant="h6"
                >
                  Connect with Coinbase
                </Typography>
              </MenuItem>
            </ul>
          </div>
          <div>
            <Typography
              variant="paragraph"
              color="blue-gray"
              className="py-4 font-semibold uppercase opacity-70"
            >
              Other
            </Typography>
            <ul className="mt-4 -ml-2.5 flex flex-col gap-1">
              <MenuItem className="mb-4 flex items-center justify-center gap-3 !py-4 shadow-md">
                <img
                  src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography
                  className="uppsecase"
                  color="blue-gray"
                  variant="h6"
                >
                  Connect with Trust Wallet
                </Typography>
              </MenuItem>
            </ul>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between gap-2">
          <Typography variant="small" color="gray" className="font-normal">
            New to Ethereum wallets?
          </Typography>
          <Button variant="outlined" size="sm">
            Learn More
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}