'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
// Assurez-vous de copier les composants nécessaires depuis shadcn/ui
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { PrismaClient } from '@prisma/client'


export default function EditAutomatisation() {
  const [name, setName] = useState('')
  const [repoUrl, setRepoUrl] = useState('')
  const [hour, setHour] = useState('')
  const [jobName, setJobName] = useState('')
  const [token, setToken] = useState('')
  const [description, setDescription] = useState('')
  
  const router = useRouter()
  const { id } = useParams()

  useEffect(() => {
    // Charger les données de l'automatisation existante
    const fetchAutomatisation = async () => {
      try {
        const response = await fetch(`/api/automatisations/${id}`)
        if (response.ok) {
          const data = await response.json()
          setName(data.name)
          setRepoUrl(data.repoUrl)
          setHour(data.hour.toString())
          setJobName(data.jobName)
          setToken(data.token)
          setDescription(data.description)
        } else {
          throw new Error('Erreur lors du chargement de l\'automatisation')
        }
      } catch (error) {
        console.error('Erreur:', error)
        alert('Une erreur est survenue lors du chargement de l\'automatisation')
      }
    }

    fetchAutomatisation()
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch(`/api/automatisations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, repoUrl, hour: parseInt(hour), jobName, token, description }),
      })
      
      if (response.ok) {
        router.push('/dashboard/automatisations')
      } else {
        throw new Error('Erreur lors de la mise à jour de l\'automatisation')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Une erreur est survenue lors de la mise à jour de l\'automatisation')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Modifier l'automatisation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Nom</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="repoUrl" className="block mb-1">URL du dépôt</label>
          <Input
            type="url"
            id="repoUrl"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="hour" className="block mb-1">Heure</label>
          <Input
            type="number"
            id="hour"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            required
            min="0"
            max="23"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="jobName" className="block mb-1">Nom du job</label>
          <Input
            type="text"
            id="jobName"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="token" className="block mb-1">Token</label>
          <Input
            type="text"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full"
            rows={3}
          />
        </div>
        <Button type="submit" >
          Mettre à jour l'automatisation
        </Button>
      </form>
    </div>
  )
}

