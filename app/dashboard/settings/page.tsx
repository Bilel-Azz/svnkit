import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'



export default function Settings() {
    return (          
    <div className="grid gap-6 mx-auto flex max-w-6xl flex-col flex-wrap items-start  gap-6 p-6 sm:flex-row sm:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Name</CardTitle>
            <CardDescription>Used to identify your project in the dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Input placeholder="Project Name" />
            </form>
          </CardContent>
          <CardFooter className="border-t p-6">
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Root Directory</CardTitle>
            <CardDescription>The directory within your project, in which your code is located.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input placeholder="Project Name" defaultValue="/web" />
              <div className="flex items-center space-x-2">
                <Checkbox id="include" defaultChecked />
                <label
                  htmlFor="include"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Include files from outside of the Root Directory
                </label>
              </div>
            </form>
          </CardContent>
          <CardFooter className="border-t p-6">
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose what you want to be notified about.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
              <BellIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Everything</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email digest, mentions & all activity.</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md bg-gray-100 p-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50">
              <AtSignIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Available</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Only mentions and comments.</p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50">
              <EyeOffIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Turn off all notifications.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Choose your preferred theme and font size.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Theme</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Choose between light and dark mode.</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SunIcon className="h-4 w-4 mr-2" />
                    Light
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuRadioGroup value="light">
                    <DropdownMenuRadioItem value="light">
                      <SunIcon className="h-4 w-4 mr-2" />
                      Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">
                      <MoonIcon className="h-4 w-4 mr-2" />
                      Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system">
                      <MonitorIcon className="h-4 w-4 mr-2" />
                      System
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Font Size</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Adjust the font size to your preference.</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <TextIcon className="h-4 w-4 mr-2" />
                    Medium
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuRadioGroup value="medium">
                    <DropdownMenuRadioItem value="small">Small</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="large">Large</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
            <CardDescription>Manage your privacy settings.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Share Usage Data</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Help us improve the product by sharing anonymous usage data.
                </p>
              </div>
              <Switch id="share-usage-data" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Allow Third-Party Cookies</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable third-party cookies for personalized content.
                </p>
              </div>
              <Switch id="third-party-cookies" />
            </div>
          </CardContent>
        </Card>
      </div>


)
}

function AtSignIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
</svg>
)
}


function BellIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
</svg>
)
}


function EyeOffIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
  <line x1="2" x2="22" y1="2" y2="22" />
</svg>
)
}


function FrameIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1="22" x2="2" y1="6" y2="6" />
  <line x1="22" x2="2" y1="18" y2="18" />
  <line x1="6" x2="6" y1="2" y2="22" />
  <line x1="18" x2="18" y1="2" y2="22" />
</svg>
)
}


function MonitorIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect width="20" height="14" x="2" y="3" rx="2" />
  <line x1="8" x2="16" y1="21" y2="21" />
  <line x1="12" x2="12" y1="17" y2="21" />
</svg>
)
}


function MoonIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
</svg>
)
}


function SunIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
</svg>
)
}


function TextIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
return (
<svg
  {...props}
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M17 6.1H3" />
  <path d="M21 12.1H3" />
  <path d="M15.1 18H3" />
</svg>
)
}