import { useEffect, useRef } from 'react'

export function AIBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Neural network nodes
    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      layer: number
      connections: Connection[]

      constructor(x: number, y: number, layer: number) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.radius = Math.random() * 2 + 1
        this.layer = layer
        this.connections = []
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.layer === 0 ? 'rgba(0, 245, 255, 0.6)' : 
                       this.layer === 1 ? 'rgba(124, 58, 237, 0.6)' : 
                       'rgba(0, 245, 255, 0.4)'
        ctx.fill()
      }
    }

    // Data packets
    class DataPacket {
      x: number
      y: number
      targetX: number
      targetY: number
      progress: number
      speed: number
      size: number

      constructor(startX: number, startY: number, endX: number, endY: number) {
        this.x = startX
        this.y = startY
        this.targetX = endX
        this.targetY = endY
        this.progress = 0
        this.speed = Math.random() * 0.02 + 0.01
        this.size = Math.random() * 3 + 2
      }

      update() {
        this.progress += this.speed
        if (this.progress >= 1) {
          return false // Packet reached destination
        }

        // Smooth interpolation
        const t = this.progress
        this.x = this.x + (this.targetX - this.x) * t * 0.1
        this.y = this.y + (this.targetY - this.y) * t * 0.1

        return true // Packet still traveling
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${0.8 - this.progress * 0.5})`
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${0.2 - this.progress * 0.15})`
        ctx.fill()
      }
    }

    // Connection between nodes
    class Connection {
      node1: Node
      node2: Node
      strength: number

      constructor(node1: Node, node2: Node) {
        this.node1 = node1
        this.node2 = node2
        this.strength = Math.random() * 0.5 + 0.5
      }

      draw() {
        const distance = Math.sqrt(
          Math.pow(this.node2.x - this.node1.x, 2) + 
          Math.pow(this.node2.y - this.node1.y, 2)
        )

        if (distance < 200) {
          const opacity = (1 - distance / 200) * this.strength * 0.3
          ctx.beginPath()
          ctx.moveTo(this.node1.x, this.node1.y)
          ctx.lineTo(this.node2.x, this.node2.y)
          ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    // AI symbols floating in background
    class AISymbol {
      x: number
      y: number
      symbol: string
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      fadeDirection: number
      private readonly symbols: string[]

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.symbols = ['⚡', '🧠', '🔮', '💭', '⚛️', '🔬', '📊', '🤖', '🧬', '🔭']
        this.symbol = this.symbols[Math.floor(Math.random() * this.symbols.length)]
        this.size = Math.random() * 20 + 15
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.opacity = Math.random() * 0.3 + 0.1
        this.fadeDirection = Math.random() > 0.5 ? 0.01 : -0.01
      }

      update() {
        this.rotation += this.rotationSpeed
        this.opacity += this.fadeDirection

        if (this.opacity > 0.4 || this.opacity < 0.1) {
          this.fadeDirection *= -1
        }

        // Slowly drift
        this.x += Math.sin(this.rotation) * 0.2
        this.y += Math.cos(this.rotation) * 0.1

        // Wrap around screen
        if (this.x < -50) this.x = canvas.width + 50
        if (this.x > canvas.width + 50) this.x = -50
        if (this.y < -50) this.y = canvas.height + 50
        if (this.y > canvas.height + 50) this.y = -50
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.font = `${this.size}px Arial`
        ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(this.symbol, 0, 0)
        ctx.restore()
      }
    }

    // Initialize nodes in layers (neural network structure)
    const nodes: Node[] = []
    const layers = 4
    const nodesPerLayer = 8

    for (let layer = 0; layer < layers; layer++) {
      for (let i = 0; i < nodesPerLayer; i++) {
        const x = (canvas.width / (layers + 1)) * (layer + 1)
        const y = (canvas.height / (nodesPerLayer + 1)) * (i + 1) + (Math.random() - 0.5) * 100
        nodes.push(new Node(x, y, layer))
      }
    }

    // Create connections between adjacent layers
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerNodes = nodes.filter(n => n.layer === layer)
      const nextLayerNodes = nodes.filter(n => n.layer === layer + 1)

      currentLayerNodes.forEach(node1 => {
        nextLayerNodes.forEach(node2 => {
          if (Math.random() > 0.7) { // 30% chance of connection
            node1.connections.push(new Connection(node1, node2))
          }
        })
      })
    }

    // Initialize data packets and AI symbols
    const dataPackets: DataPacket[] = []
    const aiSymbols: AISymbol[] = []

    for (let i = 0; i < 15; i++) {
      aiSymbols.push(new AISymbol())
    }

    // Animation loop
    let animationId: number
    let packetTimer = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 15, 25, 0.1)' // Semi-transparent background for trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw connections
      nodes.forEach(node => {
        node.connections.forEach(connection => connection.draw())
      })

      // Update and draw nodes
      nodes.forEach(node => {
        node.update()
        node.draw()
      })

      // Create new data packets periodically
      packetTimer++
      if (packetTimer > 60) { // Every 60 frames
        const fromLayer = Math.floor(Math.random() * (layers - 1))
        const toLayer = fromLayer + 1
        const fromNodes = nodes.filter(n => n.layer === fromLayer)
        const toNodes = nodes.filter(n => n.layer === toLayer)

        if (fromNodes.length > 0 && toNodes.length > 0) {
          const fromNode = fromNodes[Math.floor(Math.random() * fromNodes.length)]
          const toNode = toNodes[Math.floor(Math.random() * toNodes.length)]
          dataPackets.push(new DataPacket(fromNode.x, fromNode.y, toNode.x, toNode.y))
        }
        packetTimer = 0
      }

      // Update and draw data packets
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        if (!dataPackets[i].update()) {
          dataPackets.splice(i, 1)
        } else {
          dataPackets[i].draw()
        }
      }

      // Update and draw AI symbols
      aiSymbols.forEach(symbol => {
        symbol.update()
        symbol.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 1 }}
    />
  )
}
