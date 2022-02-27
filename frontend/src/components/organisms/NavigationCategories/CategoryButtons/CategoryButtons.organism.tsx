import React, { ReactNode } from 'react'

import ButtonsStack, {
    StackButtonProps,
} from 'components/molecules/ButtonsStack/ButtonsStack.molecule'
import Category, { CategoryProps } from 'components/molecules/Category/Category.molecule'

type CategoryButtonsProps = {
    definition: Record<
        string,
        // use property as cat label, and content is set to btns or customContent
        Omit<CategoryProps, 'catLabel' | 'content'> &
            (
                | {
                      // list of btns to render as content
                      btns: StackButtonProps[]
                      customContent?: never
                  }
                | {
                      // custom content to render for category
                      customContent: ReactNode
                      btns?: never
                  }
            )
    >
    alignment?: 'centered' | 'left'
    withAnimation?: boolean
}

const CategoryButtons = ({
    definition,
    alignment = 'centered',
    withAnimation = false,
}: CategoryButtonsProps) => (
    <>
        {Object.keys(definition).map((categoryName) => {
            const { btns, customContent, ...categoryProps } =
                    definition[categoryName as keyof typeof definition],
                content =
                    customContent ||
                    (btns?.length && (
                        <ButtonsStack
                            withAnimation={withAnimation}
                            alignment={alignment}
                            btnsDef={btns}
                        />
                    ))

            return (
                <Category
                    key={categoryName}
                    {...categoryProps}
                    catLabel={categoryName}
                    alignment={alignment}
                    withAnimation={withAnimation}
                    content={content}
                />
            )
        })}
    </>
)

export default CategoryButtons
