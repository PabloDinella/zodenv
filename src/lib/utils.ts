/**
 * Does the todo thing.
 *
 * @example
 *
 * ```ts
 *   const a = todo('task name')
 * ```
 *
 */
// export const todo = (task?: string): string => {
//   return task ?? `nothing`
// }

require(`dotenv`)
// import type { z } from 'zod'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let environment: any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const zodenv = (zodSchema: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const parsedEnvironmentVariables = zodSchema.safeParse(process.env)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!parsedEnvironmentVariables.success) {
    // console.error(`Missing or invalid environment variables:`)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    parsedEnvironmentVariables.error.issues.forEach((issue: any) =>
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
      console.error(`${issue.path[0]}: ${issue.message}`)
    )

    throw new Error(`Missing or invalid environment variables
    
    
    
    
    test




    ----- - -
    `)
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  environment = parsedEnvironmentVariables.data
}
