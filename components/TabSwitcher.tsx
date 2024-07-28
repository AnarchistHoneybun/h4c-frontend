'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from 'next/navigation'

const TabSwitcher: React.FC = () => {
  const router = useRouter()

  const handleTabChange = (value: string) => {
    router.push(`/${value === 'home' ? '' : value}`)
  }

  return (
    <div className="flex justify-center w-full p-2">
    <Tabs defaultValue="home" onValueChange={handleTabChange} className="w-auto">
      <TabsList className="grid w-[400px] grid-cols-3">
        <TabsTrigger value="home">HOME</TabsTrigger>
        <TabsTrigger value="dash">DASH</TabsTrigger>
        <TabsTrigger value="profile">PROFILE</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="home">Home Page</TabsContent>
        <TabsContent value="dash">Dash Page</TabsContent>
        <TabsContent value="profile">Profile Page</TabsContent> */}
    </Tabs>
    </div>
  )
}

export default TabSwitcher