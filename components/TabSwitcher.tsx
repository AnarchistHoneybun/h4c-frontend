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
    <Tabs defaultValue="home" onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="home">HOME</TabsTrigger>
        <TabsTrigger value="dash">DASH</TabsTrigger>
        <TabsTrigger value="profile">PROFILE</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="home">Home Page</TabsContent>
        <TabsContent value="dash">Dash Page</TabsContent>
        <TabsContent value="profile">Profile Page</TabsContent> */}
    </Tabs>
  )
}

export default TabSwitcher