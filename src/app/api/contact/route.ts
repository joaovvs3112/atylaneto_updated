import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, specialty, message } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Nome, telefone e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the contact submission
    console.log("📩 Nova mensagem de contato:", {
      name,
      phone,
      email,
      specialty: specialty || "Não especificada",
      message: message || "Sem mensagem",
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar a mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
