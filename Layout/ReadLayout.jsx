import ReadingHeader from "@/components/shared/ReadingHeader";

function ReadLayout({children}) {

    return (
        <div>
        <ReadingHeader/>
            {children}
        </div>
    );
}

export default ReadLayout;