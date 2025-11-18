'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  style?: React.CSSProperties
}

export function ImageLightbox({ src, alt, width, height, className, style }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const MIN_SCALE = 1
  const MAX_SCALE = 4
  const ZOOM_STEP = 0.5

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
          setScale(1)
          setPosition({ x: 0, y: 0 })
        }
      }
      document.addEventListener('keydown', handleEsc)
      return () => {
        document.removeEventListener('keydown', handleEsc)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + ZOOM_STEP, MAX_SCALE))
  }

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - ZOOM_STEP, MIN_SCALE)
      if (newScale === MIN_SCALE) {
        setPosition({ x: 0, y: 0 })
      }
      return newScale
    })
  }

  const handleResetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleDoubleClick = () => {
    if (scale > MIN_SCALE) {
      handleResetZoom()
    } else {
      setScale(2)
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP
      setScale((prev) => {
        const newScale = Math.max(MIN_SCALE, Math.min(prev + delta, MAX_SCALE))
        if (newScale === MIN_SCALE) {
          setPosition({ x: 0, y: 0 })
        }
        return newScale
      })
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > MIN_SCALE) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > MIN_SCALE) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <>
      <div 
        className="cursor-zoom-in"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(true)
          }
        }}
        aria-label={`Click to enlarge: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={style}
        />
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          style={{ backdropFilter: 'blur(8px)' }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${alt}`}
        >
          <div 
            ref={containerRef}
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: scale > MIN_SCALE ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain select-none"
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              }}
              onDoubleClick={handleDoubleClick}
              draggable={false}
            />
            
            {/* Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleClose()
                }}
                className="bg-black/50 hover:bg-black/70 text-white text-2xl font-bold w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close image"
              >
                ×
              </button>
              <div className="flex flex-col gap-2 bg-black/50 rounded-lg p-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomIn()
                  }}
                  disabled={scale >= MAX_SCALE}
                  className="bg-transparent hover:bg-white/20 text-white text-xl font-bold w-8 h-8 rounded flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleZoomOut()
                  }}
                  disabled={scale <= MIN_SCALE}
                  className="bg-transparent hover:bg-white/20 text-white text-xl font-bold w-8 h-8 rounded flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Zoom out"
                >
                  −
                </button>
                {scale > MIN_SCALE && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleResetZoom()
                    }}
                    className="bg-transparent hover:bg-white/20 text-white text-xs font-medium w-8 h-8 rounded flex items-center justify-center transition-colors"
                    aria-label="Reset zoom"
                    title="Reset zoom"
                  >
                    1:1
                  </button>
                )}
              </div>
            </div>

            {/* Zoom indicator */}
            {scale > MIN_SCALE && (
              <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded z-10">
                {Math.round(scale * 100)}%
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

