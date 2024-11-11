'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import { getValidSessionToken } from '../../../database/sessions';
import SurveyForm from './surveyForm';

export default async function SurveyPage() {
  const sessionTokenCookie = (await cookies()).get('sessionToken');

  const session =
    sessionTokenCookie &&
    (await getValidSessionToken(sessionTokenCookie.value));

  // 3.

  if (!session) {
    redirect('/login?returnTo=/dashboard');
  }
  return (
    <div>
      <SurveyForm />
    </div>
  );
}