"use client";

import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import CreditButton from "./CreditButton";
import { CalendarDays, Users } from "lucide-react";

const HeaderActions = ({ user }) => {
  const { isSignedIn } = useUser(); // 👈 new way
  const role = user?.role;

  return (
    <div className="flex items-center gap-3">
      {!isSignedIn && (
        <>
          <SignInButton mode="modal">
            <Button variant="ghost">Sign in</Button>
          </SignInButton>

          <SignInButton mode="modal">
            <Button variant="gold">Get started →</Button>
          </SignInButton>
        </>
      )}

      {isSignedIn && (
        <>
          {role === "INTERVIEWER" && (
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          )}

          {role === "INTERVIEWEE" && (
            <>
              <Button variant="ghost" asChild>
                <Link href="/explore">
                  <Users size={16} />
                  <span className="hidden md:inline">Explore</span>
                </Link>
              </Button>

              <Button variant="default" asChild>
                <Link href="/appointments">
                  <CalendarDays size={16} />
                  <span className="hidden md:inline">My Appointments</span>
                </Link>
              </Button>
            </>
          )}

          <CreditButton
            role={role === "INTERVIEWER" ? "INTERVIEWER" : "INTERVIEWEE"}
            credits={
              role === "INTERVIEWER"
                ? (user?.creditBalance ?? 0)
                : (user?.credits ?? 0)
            }
          />

          <UserButton />
        </>
      )}
    </div>
  );
};

export default HeaderActions;
