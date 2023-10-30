import * as Dialog from '@radix-ui/react-dialog';
import { css } from '@styled-system/css';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { hstack } from '@styled-system/patterns';

export const PreviewImage = ({ alt, id, ...props }: ImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div>
      <Dialog.Root open={isZoomed} onOpenChange={setIsZoomed}>
        <AnimatePresence>
          {isZoomed && <Image alt={alt || ''} {...props} />}
          {!isZoomed && (
            <motion.div
              className={css({ pos: 'relative' })}
              layoutId={`image_${id}`}
            >
              <Dialog.Trigger asChild>
                <Image alt={alt || ''} {...props} />
              </Dialog.Trigger>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isZoomed && (
            <Dialog.Portal forceMount>
              <Dialog.Close
                className={hstack({
                  position: 'fixed',
                  inset: 0,
                  w: 'screen',
                  h: 'screen',
                  zIndex: '999',
                  cursor: 'zoom-out',
                  justifyContent: 'center',
                  alignItems: 'center',
                })}
              >
                <Dialog.Overlay asChild>
                  <motion.div
                    className={css({
                      position: 'absolute',
                      bg: 'rgba(0,0,0,0.5)',
                      inset: 0,
                    })}
                    initial={{ opacity: 0, backdropFilter: 'blur(0)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0)' }}
                  ></motion.div>
                </Dialog.Overlay>

                <Dialog.Content
                  className={css({
                    w: 'full',
                    overflow: 'hidden',
                  })}
                >
                  <div
                    className={hstack({
                      display: 'flex',
                      pos: 'relative',
                      justifyContent: 'center',
                      alignItems: 'center',
                    })}
                  >
                    <div
                      className={css({
                        pos: 'relative',
                        aspectRatio: 3 / 2,
                        w: 'full',
                        maxW: '80rem',
                      })}
                    >
                      <motion.div
                        layoutId={`image_${id}`}
                        className={css({
                          inset: 0,
                          pos: 'absolute',
                        })}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                          duration: 0.5,
                        }}
                      >
                        <Image
                          alt={alt || ''}
                          {...props}
                          className={css({
                            mx: 'auto',
                            h: 'full',
                            objectFit: 'contain',
                            overflow: 'hidden',
                          })}
                          unoptimized
                        />
                      </motion.div>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Close>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </div>
  );
};
