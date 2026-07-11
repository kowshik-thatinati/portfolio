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

      update(canvas: HTMLCanvasElement | null) {
        if (!canvas) return
        
        // Boundary collision
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        
        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw(ctx: CanvasRenderingContext2D | null) {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.layer === 0 ? 'rgba(148, 163, 184, 0.38)' :
                       this.layer === 1 ? 'rgba(100, 116, 139, 0.3)' :
                       'rgba(79, 70, 229, 0.24)'
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

      draw(ctx: CanvasRenderingContext2D | null) {
        if (!ctx) return
        const distance = Math.sqrt(
          Math.pow(this.node2.x - this.node1.x, 2) + 
          Math.pow(this.node2.y - this.node1.y, 2)
        )

        if (distance < 200) {
          const opacity = (1 - distance / 200) * this.strength * 0.3
          ctx.beginPath()
          ctx.moveTo(this.node1.x, this.node1.y)
          ctx.lineTo(this.node2.x, this.node2.y)
          ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
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

    const drawScene = () => {
      ctx.fillStyle = 'rgba(248, 250, 252, 0.14)' // Soft trail on light canvas
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw connections
      nodes.forEach(node => {
        node.connections.forEach(connection => connection.draw(ctx))
      })

      // Update and draw nodes
      nodes.forEach(node => {
        node.draw(ctx)
      })
    }

    drawScene()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  )
}
