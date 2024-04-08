"use client"

import LogoImg from '@/assets/notes.png';
import CopyNote from '@/components/copy-note';
import DownloadNote from '@/components/download-note';
import { TNote } from '@/types';
import Image from "next/image";
import Link from "next/link";
import { GoHeartFill } from "react-icons/go";
import { PiArrowElbowRightDownLight } from "react-icons/pi";
import { RiHomeHeartLine } from 'react-icons/ri';

export default function SingleNote({ note }: { note: TNote }) {
          return (
                    <div className="relative h-screen">
                              <div className="lg:container px-3 mx-auto py-8">
                                        <div className="text-2xl md:text-4xl lg:text-5xl select-none font-bold mb-4 text-center flex md:justify-center items-center gap-1">
                                                  <p className="flex items-center gap-1">
                                                            <Image src={LogoImg} draggable={false} className='w-10 md:w-12 select-none' alt="" />
                                                            KNotes
                                                  </p>
                                        </div>

                                        <div className="mb-4">
                                                  <div className="mt-10">
                                                            <h3 className="text-xs select-none font-semibold text-primary flex items-center gap-1">
                                                                      Title <PiArrowElbowRightDownLight className='text-xs' />
                                                            </h3>
                                                            <p className="pt-2 w-full select-none mb-4 md:mb-0">
                                                                      {note?.title}
                                                            </p>
                                                  </div>
                                                  <div className="mt-8">
                                                            <h3 className="text-xs select-none font-semibold text-primary flex items-center gap-1">
                                                                      Description <PiArrowElbowRightDownLight className='text-xs' />
                                                            </h3>
                                                            <div className="pt-2 w-full h-fit select-none overflow-y-auto mb-4" dangerouslySetInnerHTML={{ __html: note?.description || '<p><br></p>' }}></div>
                                                  </div>
                                        </div>
                                        <div className="flex justify-between items-center pt-5">
                                                  <p className="text-xs md:text-sm glass uppercase cursor-default no-animation font-semibold py-3 px-4 rounded-xl focus:outline-none focus:shadow-outline text-center select-none flex items-center gap-1">
                                                            Thanks for using <GoHeartFill /> <span className='font-bold'>KNotes!</span>
                                                  </p>
                                                  <div className="flex justify-center items-center gap-3 glass px-2 py-1 rounded-xl">
                                                            <span className='sm:tooltip' data-tip="Copy Note">
                                                                      <CopyNote note={note} />
                                                            </span>
                                                            <span className='sm:tooltip' data-tip="Home">
                                                                      <Link href='/'>
                                                                                <button className="border-r py-2 px-3 font-semibold">
                                                                                          <RiHomeHeartLine size={20} />
                                                                                </button>
                                                                      </Link>
                                                            </span>
                                                            <span className='sm:tooltip' data-tip="Download Note">
                                                                      <DownloadNote note={note} />
                                                            </span>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}